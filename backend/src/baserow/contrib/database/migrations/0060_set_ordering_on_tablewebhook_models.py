# Generated by Django 3.2.6 on 2022-01-07 18:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("database", "0059_add_view_public_index"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="tablewebhookevent",
            options={"ordering": ("id",)},
        ),
        migrations.AlterModelOptions(
            name="tablewebhookheader",
            options={"ordering": ("id",)},
        ),
    ]
