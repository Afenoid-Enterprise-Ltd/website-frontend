import DOMPurify from 'dompurify';


export const SCRIPT_DETAILS = {
  link: "https://script.google.com/macros/s/AKfycbwODiym1_DZPittbat60hgqefZnMgP0Hy04MfRb6JAyzZMZQl1-Z_7-WVbx79FJ-cYbZg/exec"
}

export const sanitize = (content:any) => {
  // Check if code is running in browser
  return typeof window !== 'undefined' 
    ? DOMPurify.sanitize(content) 
    : content;
};