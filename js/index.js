/*Andrés Verdugo*/
/*A pesar de usar JQuery, sería bueno incluir un poco de JavaScript más cercano a lo que vimos en clase. Funciones como filter, map y el principio de 
modularidad*/
jQuery(document).ready(function()
{
	jQuery('.skillbar').each(function()
	{
		jQuery(this).find('.skillbar-bar').animate({width:jQuery(this).attr('data-percent')},6000);});
});
