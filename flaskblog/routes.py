from distutils.archive_util import make_archive
from flask import render_template, url_for, flash, redirect, request
from flaskblog import app
import pandas as pd
import numpy as np
import pickle
import sklearn
from sklearn.preprocessing import StandardScaler

model = pickle.load(open("flaskblog/RF_price_predicting_model.pkl", 'rb'))

@app.route('/')
@app.route('/home/')
def home():
    return render_template("home.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

standard_to = StandardScaler()


@app.route("/predict", methods=['GET','POST'])
def predict():
    Fuel_Type_Diesel = 0
    if request.method == 'POST':
        Displacement = float(request.form['Displacement'])
        capacity = float(request.form['capacity'])
        citymileage = float(request.form['citymileage']) 
        Fuel_Type_Petrol = request.form['Fuel_Type_Petrol']
        if(Fuel_Type_Petrol == 'Petrol'):
            Fuel_Type_Petrol = 1
            Fuel_Type_Diesel = 0
            Fuel_Type_Electric = 0
            Fuel_Type_Hybrid = 0
        elif(Fuel_Type_Petrol == "Disesel"):
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 1
            Fuel_Type_Electric = 0
            Fuel_Type_Hybrid = 0
        elif(Fuel_Type_Petrol == "Electric"):
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 0
            Fuel_Type_Electric = 1
            Fuel_Type_Hybrid = 0
        elif(Fuel_Type_Petrol == "Hybrid"):
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 0
            Fuel_Type_Electric = 0
            Fuel_Type_Hybrid = 1
        else:
            Fuel_Type_Petrol = 0
            Fuel_Type_Diesel = 0
            Fuel_Type_Electric = 0
            Fuel_Type_Hybrid = 0
        Transmission_Mannual = request.form['Transmission_Mannual']
        if(Transmission_Mannual == 'Mannual'):
            Transmission_Mannual = 1
        else:
            Transmission_Mannual = 0
        prediction = model.predict([[Displacement, capacity, citymileage, Fuel_Type_Diesel, Fuel_Type_Electric,
                                     Fuel_Type_Hybrid, Fuel_Type_Petrol, Transmission_Mannual]])
        output = round(prediction[0], 2)
        if output < 0:
            return render_template('predict.html', prediction_texts="Sorry this is not available")
        else:
            return render_template('predict.html', prediction_text="You Can Buy The Car at ₹{:.3f}".format((output)))
    else:
        return render_template('predict.html')

