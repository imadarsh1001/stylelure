from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.cart_home, name='cart'),
    url(r'^update/$', views.cart_update, name='update'),
    url(r'^wishlist/$', views.wishlist, name='wishlist'),

]
