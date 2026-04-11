from django.contrib import admin
from .models import Topic, Entry
@admin.register(Topic)
class Topicadmin(admin.ModelAdmin):
    list_display = ['text', 'data_added']

    list_filter = ['data_added']
    search_fields = ['text']
    date_hierarchy='data_added'
    show_facets = admin.ShowFacets.ALWAYS
admin.site.register(Entry)
