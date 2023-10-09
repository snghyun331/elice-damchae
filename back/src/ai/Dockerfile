FROM python:3.10.13-alpine

RUN pip install --upgrade pip
RUN pip install flask

WORKDIR /app
COPY . .

EXPOSE 5000

CMD ["python","app.py"]
