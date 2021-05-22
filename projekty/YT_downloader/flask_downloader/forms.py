from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length


class LinkForm(FlaskForm):
    link = StringField('Link', validators=[DataRequired(), Length(min=10)])
    submit = SubmitField('Find')