# Generated by Django 3.0.6 on 2020-05-27 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20200526_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(blank=True, default='', upload_to='frontend/static/frontend/updloads'),
        ),
        migrations.AlterField(
            model_name='user',
            name='pdf',
            field=models.FileField(default='', upload_to='frontend/static/frontend/uploads'),
        ),
        migrations.AlterField(
            model_name='user',
            name='qr',
            field=models.ImageField(blank=True, default='', upload_to=''),
        ),
        migrations.AlterField(
            model_name='user',
            name='razon_social',
            field=models.CharField(choices=[('SL', 'SL'), ('SA', 'SA'), ('Autonomo', 'Autonomo'), ('SCOOP', 'SCOOP'), ('Otros', 'Otros')], default='SL', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='tipo_negocio',
            field=models.CharField(choices=[('Bar', 'Bar'), ('Restaurante', 'Restaurante'), ('Hotel', 'Hotel'), ('Ocio Nocturno', 'Ocio Nocturno'), ('Otros', 'Otros')], default='Bar', max_length=100),
        ),
    ]