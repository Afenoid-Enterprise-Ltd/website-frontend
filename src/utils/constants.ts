import DOMPurify from 'dompurify';


export const SCRIPT_DETAILS = {
  link: "https://script.google.com/macros/s/AKfycbytVcvlOL4ulKpqGuqIZTPpOY8XumBbEcrBd4hjEl8A53ubO61BLoCpMlDMmil-uUDozA/exec"
}

export const sanitize = (content:any) => {
  // Check if code is running in browser
  return typeof window !== 'undefined' 
    ? DOMPurify.sanitize(content) 
    : content;
};



