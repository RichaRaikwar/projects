# Generated by Django 3.0.3 on 2020-04-03 06:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grooming', '0003_shop_services'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='shop_services',
            new_name='shop_service',
        ),
    ]
