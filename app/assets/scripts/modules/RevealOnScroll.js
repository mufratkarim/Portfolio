import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(elm, offset) {
		this.itemsToReveal=elm;
		this.offsetPercentage=offset;
		this.revealTriggerElement=$(elm);
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that= this;
		this.itemsToReveal.each(function() {
			var currentItem=this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).toggleClass("reveal-item--is-visible");
				},
				offset:that.offsetPercentage,
			});
		});

	}

}

export default RevealOnScroll;