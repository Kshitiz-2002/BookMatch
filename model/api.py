from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)

# Load data and models
popular_df = pickle.load(open('popular.pkl', 'rb'))
pt = pickle.load(open('pt.pkl', 'rb'))
books = pickle.load(open('books.pkl', 'rb'))
similarity_scores = pickle.load(open('similarity_scores.pkl', 'rb'))

@app.route('/recommend', methods=['POST'])
def recommend_book():
    if not request.json or 'book_name' not in request.json:
        return jsonify({'error': 'Please provide a book name in JSON format.'}), 400
    
    book_name = request.json['book_name']
    recommended_books = recommend(book_name)
    
    return jsonify(recommended_books)

def recommend(book_name):
    index = np.where(pt.index == book_name)[0][0]
    similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:10]

    data = []
    for i in similar_items:
        item = []
        temp_df = books[books['Book-Title'] == pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))

        data.append(item)

    return data

if __name__ == '__main__':
    app.run(debug=True)
