import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el: '#review__slider',
    template: '#rewiers',
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                freeScroll: false,
                groupCells: true,
                wrapAround: false
            }
        }
    },
    methods: {
        makeRequireImagesPath(data) {
            return data.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);

                item.photo = requirePic;

                return item;
            });
        },
        slide(direction) {
            switch (direction) {
                case 'next':
                    this.$refs.flickity.next();
                    break;
                case 'prev':
                    this.$refs.flickity.previous();
                    break;
            }
        }
    },
    created() {
        const data = require('../data/rewiers.json');
        this.reviews = this.makeRequireImagesPath(data);
    }
});