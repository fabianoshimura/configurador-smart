# Generated by Django 2.2.2 on 2020-01-17 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0003_field_primary'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='field',
            options={'ordering': ('-primary', 'order')},
        ),
    ]
