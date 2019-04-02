module ApplicationHelper

  include ERB::Util

  def auth_token
    "<input type=\"hidden\" name=\"authenticity_token\" value=\"#{form_authenticity_token}\">".html_safe
  end

  def patch_request
    "<input type=\"hidden\" name=\"_method\" value=\"patch\">".html_safe
  end
end
