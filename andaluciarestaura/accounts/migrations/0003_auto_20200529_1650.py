# Generated by Django 3.0.6 on 2020-05-29 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_is_premium'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='user',
            name='pdf',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='user',
            name='qr',
            field=models.CharField(max_length=1000),
        ),
    ]
