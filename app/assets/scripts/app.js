import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/modal.js'

var mobileMenu=new MobileMenu();
new RevealOnScroll($(".project-item"), "85%");
new RevealOnScroll($(".skill"), "60%");
var stickyHeader= new StickyHeader();
var modal=new Modal()