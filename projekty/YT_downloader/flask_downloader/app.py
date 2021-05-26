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
        
        
        try:
            link = form.link.data
            session['thumbnail_url'] = thumbnailUrl(link)
            session['video_name'] = videoName(link)
            session['video_views'] = videoViews(link)
            return redirect(url_for('about'))
        except:
            flash(f"Enter valid link!")
            return redirect(url_for('home'))
        
    return render_template('home.html', form=form)

@app.route("/about", methods=['GET', 'POST'])
def about(thumbnail_url=None):
    return render_template('about.html',
                                        thumbnail_url=session['thumbnail_url'], 
                                        video_views = session['video_views'],
                                        video_name = session['video_name']
                                        )


if __name__ == '__main__':
    app.run(debug=True)