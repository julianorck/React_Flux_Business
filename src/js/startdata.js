module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('businesses', JSON.stringify([
            {
                id: '00001',
                name: 'First Business',
                category: 'Technology',
                address: {
                    street: '89 West main st',
                    city: 'Merrimac',
                    state: 'MA',
                    zipcode:'01860'
                },
                phone: '978-384-8273',
                email: 'support@firstbusiness.com',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices vestibulum sapien vel egestas. Nullam placerat purus nec sagittis laoreet. In nec metus molestie'
            },
            {
                id: '00002',
                name: 'Second Business',
                category: 'Food',
                address: {
                    street: '22 Broad main st',
                    city: 'Amesbury',
                    state: 'MA',
                    zipcode:'01913'
                },
                phone: '978-555-5555',
                email: 'support@secondbusiness.com',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices vestibulum sapien vel egestas. Nullam placerat purus nec sagittis laoreet. In nec metus molestie'
            }
        ]));
    }

};