from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
def send_email(name, email, subject, message):
    sender_email = "kumawatritik54@gmail.com"
    sender_password = "nwco avbe krim sipm"
    receiver_email = "rajendra1234jangid@gmail.com"  # Replace with your receiving email address

    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(email, receiver_email, text)
        server.quit()
        return "Email sent successfully"
    except Exception as e:
        return f"Error sending email: {str(e)}"

@app.route('/send-email', methods=['POST'])
def send_email_route():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    if not name or not email or not subject or not message:
        return jsonify({'error': 'All fields are required'}), 400

    result = send_email(name, email, subject, message)
    return jsonify({'message': result})

if __name__ == '__main__':
    app.run(debug=True)
