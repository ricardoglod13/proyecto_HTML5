from flask import Flask, render_template, request, redirect, url_for
import mariadb
import time

app = Flask(__name__)
conn = mariadb.connect( 
    host='localhost', 
    port=3306, 
    user='root', 
    password='12345', 
    database='db_flask')
cursor = conn.cursor()

@app.route('/inicio')
@app.route('/')
def principal():
    return render_template('index_html5.html')

@app.route('/html5')
def html5():
    return render_template('html5_html5.html')

@app.route('/galeria')
def galeria():
    return render_template('galeria_html5.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto_html5.html')

@app.route('/agg_contacto', methods=['POST'])
def agg_contacto():
    if request.method == 'POST':
        nombre = request.form['nombre']
        correo = request.form['correo']
        edad = request.form['edad']
        calificacion = request.form['calificacion']
        fecha = request.form['fecha']
        explicacion = request.form['explicacion']
        
        cursor.execute('INSERT INTO usuarios (nombre, correo, edad, calificacion, fecha, explicacion) VALUES (?, ?, ?, ?, ?, ?)', 
        (nombre, correo, edad, calificacion, fecha, explicacion))
        conn.commit()

        time.sleep(5)
        return redirect(url_for('contacto'))


@app.route('/canvas')
def canvas():
    return render_template('canvas_html5.html')

@app.route('/dragdrop')
def dragdrop():
    return render_template('dragdrop_html5.html')

@app.route('/geolocation')
def geolocatin():
    return render_template('geolocation_html5.html')

@app.route('/file')
def apifile():
    return render_template('file_html5.html')

@app.route('/pro_html5')
def pro_html5():
    return render_template('proyectos_html5.html')

@app.route('/pro_python')
def pro_python():
    return render_template('proyectos_python.html')

@app.route('/pro_c')
def pro_c():
    return render_template('proyectos_c.html')

if __name__ == '__main__':
    app.run(debug=True)