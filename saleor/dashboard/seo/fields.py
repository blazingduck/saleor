from django import forms
from django.utils.translation import pgettext_lazy

from ...seo.models import SeoModel
from ..widgets import CharsLeftWidget

SEO_FIELD_HELP_TEXT = pgettext_lazy(
    'Form field help text',
    'If empty, the preview shows what will be autogenerated.')
MIN_DESCRIPTION_LENGTH = 120
MIN_TITLE_LENGTH = 25
DESCRIPTION_MAX_LENGTH = SeoModel._meta.get_field('seo_description').max_length
TITLE_MAX_LENGTH = SeoModel._meta.get_field('seo_title').max_length


class SeoTitleField(forms.CharField):
    widget = CharsLeftWidget(
        attrs={
            'data-min-recommended-length': MIN_TITLE_LENGTH,
            'maxlength': TITLE_MAX_LENGTH})

    def __init__(self, extra_attrs=None, required=False, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.max_length = TITLE_MAX_LENGTH
        if extra_attrs:
            self.widget.attrs.update(extra_attrs)
        self.required = required
        self.help_text = SEO_FIELD_HELP_TEXT
        self.label = pgettext_lazy(
            'A SEO friendly title', 'SEO Friendly Title')


class SeoDescriptionField(forms.CharField):
    help_text = SEO_FIELD_HELP_TEXT

    widget = CharsLeftWidget(
        attrs={
            'help_text': SEO_FIELD_HELP_TEXT,
            'data-min-recommended-length': MIN_DESCRIPTION_LENGTH,
            'maxlength': DESCRIPTION_MAX_LENGTH})

    def __init__(self, extra_attrs=None, required=False, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.max_length = DESCRIPTION_MAX_LENGTH
        if extra_attrs:
            self.widget.attrs.update(extra_attrs)
        self.required = required
        self.help_text = SEO_FIELD_HELP_TEXT
        self.label = pgettext_lazy(
            'A SEO friendly description', 'SEO Friendly Description')
