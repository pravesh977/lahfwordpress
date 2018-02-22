function Total_Soft_GV_LVG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.totalsoft-gv-lvg-content'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_LVG_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_LVG_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_LVG_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_LVG_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_LVG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_LVG_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_LVG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_LVG_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_LVG_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_LVG_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_LVG_'+TotalSoftGV_ID+'_'+i).show(500);
			}
			else
			{
				jQuery('#TotalSoft_GV_LVG_'+TotalSoftGV_ID+'_'+i).hide(500);
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_LVG_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
function Total_Soft_GV_TV_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.effect-container'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).css('display','inline-block');
			jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).css('display','none');
			jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_TV_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_TV_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_TV_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_TV_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_TV_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_TV_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_TV_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_TV_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).css('display','inline');
			}
			else
			{
				jQuery('#TotalSoft_GV_TV_'+TotalSoftGV_ID+'_'+i).css('display','none');
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_TV_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
function Total_Soft_GV_CP_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.TotalSoft_GV_CP_Main'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_CP_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_CP_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_CP_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_CP_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_CP_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_CP_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_CP_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_CP_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_CP_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_CP_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_CP_'+TotalSoftGV_ID+'_'+i).css('display','inline-block');
			}
			else
			{
				jQuery('#TotalSoft_GV_CP_'+TotalSoftGV_ID+'_'+i).css('display','none');
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_CP_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
function Total_Soft_GV_HLG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{

	jQuery(window).scrollTop(jQuery('.Tot_Vid_Gallery'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_HLG_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_HLG_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_HLG_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_HLG_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_HLG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_HLG_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_HLG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_HLG_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_HLG_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_HLG_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_HLG_'+TotalSoftGV_ID+'_'+i).show(500);
			}
			else
			{
				jQuery('#TotalSoft_GV_HLG_'+TotalSoftGV_ID+'_'+i).hide(500);
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_HLG_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
function Total_Soft_GV_FG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.Total_Soft_GV_Fancy_'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_FG_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_FG_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_FG_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_FG_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_FG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_FG_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_FG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_FG_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_FG_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_FG_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_FG_'+TotalSoftGV_ID+'_'+i).show(500);
			}
			else
			{
				jQuery('#TotalSoft_GV_FG_'+TotalSoftGV_ID+'_'+i).hide(500);
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_FG_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
// Parallax Engine
function Total_Soft_GV_PE_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.TotSoft_GV_Container_'+TotalSoftGV_ID).position().top);
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			jQuery('#TotalSoft_GV_PE_'+TotalSoftGV_ID+'_'+i).show();
		}
		else
		{
			jQuery('#TotalSoft_GV_PE_'+TotalSoftGV_ID+'_'+i).hide();
		}
	}

	jQuery('.pagination li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_PE_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_PE_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_PE_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_PE_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.pagination li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_PE_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_PE_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_PE_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_PE_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage)
			{
				jQuery('#TotalSoft_GV_PE_'+TotalSoftGV_ID+'_'+i).show(500);
			}
			else
			{
				jQuery('#TotalSoft_GV_PE_'+TotalSoftGV_ID+'_'+i).hide(500);
			}
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_PE_PageDiv_'+TotalSoftGV_ID).hide(500);
	}
}
// Classic Gallery
function Total_Soft_GV_CG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV)
{
	jQuery(window).scrollTop(jQuery('.TS_GV_ClG_'+TotalSoftGV_ID).position().top);
	var GV_CG_Height = jQuery('.GV_CG_Height_'+TotalSoftGV_ID).css('height');
	for(i=1;i<=TotalSoftCV;i++)
	{
		if(i>TotalSoftPP*(TotalSoftPage-1) && i<=TotalSoftPP*TotalSoftPage)
		{
			// jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).show(500);
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).animate({'height': GV_CG_Height, 'padding': '0.5em'},1000);
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).css({'display': 'inline-block'});
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).addClass('GV_CG_Height_'+TotalSoftGV_ID);
		}
		else
		{
			// jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).hide();
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).animate({'height': '0', 'padding': '0'},500);
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).css({'display': 'none'});
			jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).removeClass('GV_CG_Height_'+TotalSoftGV_ID);
		}
	}

	jQuery('.TS_GV_ClG_Pagination_'+TotalSoftGV_ID+' li').each(function(){
		jQuery(this).find('span').removeClass('active');
	})
	jQuery('#TotalSoft_GV_CG_PLi_'+TotalSoftGV_ID+'_'+TotalSoftPage).find('span').addClass('active');
}
function Total_Soft_GV_CG_PageP(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV)
{
	var TotalSoftPage='';
	jQuery('.TS_GV_ClG_Pagination_'+TotalSoftGV_ID+' li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!='1')
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())-1);
				Total_Soft_GV_CG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
			}
		}
	})
}
function Total_Soft_GV_CG_PageN(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage='';
	jQuery('.TS_GV_ClG_Pagination_'+TotalSoftGV_ID+' li').each(function(){
		if(jQuery(this).find('span').hasClass('active'))
		{
			if(jQuery(this).find('span').html()!=TotalSoftPC)
			{
				TotalSoftPage=parseInt(parseInt(jQuery(this).find('span').html())+1);
				Total_Soft_GV_CG_Page(TotalSoftGV_ID, TotalSoftPage, TotalSoftPP, TotalSoftCV);
				return false;
			}
		}
	})
}
function Total_Soft_GV_CG_PageLM(TotalSoftGV_ID, TotalSoftPP, TotalSoftCV, TotalSoftPC)
{
	var TotalSoftPage=parseInt(parseInt(jQuery('#TotalSoft_VG_CG_Page_'+TotalSoftGV_ID).val())+1);
	jQuery('#TotalSoft_VG_CG_Page_'+TotalSoftGV_ID).val(TotalSoftPage);
	var GV_CG_Height = jQuery('.GV_CG_Height_'+TotalSoftGV_ID).css('height');
	
	if(TotalSoftPage<=TotalSoftPC)
	{
		for(i=1;i<=TotalSoftCV;i++)
		{
			if(i<=TotalSoftPP*TotalSoftPage && i > TotalSoftPP*parseInt(parseInt(TotalSoftPage)-1))
			{
				jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).animate({'height': GV_CG_Height, 'padding': '0.5em'},500);
				jQuery('#TS_GV_ClG_Div1_'+TotalSoftGV_ID+'_'+i).css({'display': 'inline-block'});
			}
		}
		if(TotalSoftPage==TotalSoftPC)
		{
			jQuery('#TotalSoft_VG_CG_PageDiv_'+TotalSoftGV_ID).css('display','none');
		}
	}
	else
	{
		jQuery('#TotalSoft_VG_CG_PageDiv_'+TotalSoftGV_ID).css('display','none');
	}
}