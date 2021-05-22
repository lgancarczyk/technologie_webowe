from flask import Flask, render_template, url_for, flash, redirect, session
from forms import LinkForm
from downloadscript import *

app = Flask(__name__)

app.config['SECRET_KEY'] = '573fa3603e99b7771bd96a263d703da0'



@app.route("/", methods=['GET', 'POST'])
@app.route("/home", methods=['GET', 'POST'])
def home():
    form = LinkForm()
    if form.validate_on_submit():
        
        # flash(f"fuck you")
        
        link = form.link.data
        thumbnail_url = thumbnailUrl(link)
        session['thumbnail_url'] = thumbnail_url
        print(thumbnail_url)
        return redirect(url_for('about'))
    return render_template('home.html', form=form)

@app.route("/about", methods=['GET', 'POST'])
def about(thumbnail_url=None):
    return render_template('about.html', thumbnail_url=session['thumbnail_url'])


if __name__ == '__main__':
    app.run(debug=True)