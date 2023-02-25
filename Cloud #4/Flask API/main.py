# Import Modules
from flask import Flask

# Initialization
app = Flask(__name__)

# Routes
@app.route('/')
def hello_world():
    return 'Hello World'

# APP Run
if __name__ == '__main__':
    app.run(debug=True)