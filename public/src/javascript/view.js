export default {
  render(template, data = {}) {
    console.log('hi,im view', template);
    const element = document.getElementById(template);
    const a = document.getElementById('submit-form');
    console.log(element);
    const templateSource = element.innerHTML;
    const renderFn = Handlebars.compile(templateSource);
    a.innerHTML = renderFn();
    // return renderFn;
  }
}