from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy database to store login details
login_database = []

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/process_login', methods=['POST'])
def process_login():
    username = request.form['username']
    password = request.form['password']
    remember = 'remember' in request.form

    # Save login details to the dummy database
    login_database.append({'username': username, 'password': password, 'remember': remember})

    return redirect(url_for('success'))

@app.route('/success')
def success():
    return render_template('success.html', login_database=login_database)

if __name__ == '__main__':
    app.run(debug=True)
