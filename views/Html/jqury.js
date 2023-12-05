$(document).ready(function() {
    function fetchItems() {
        $.get('/items', function(data) {
            $('#itemList').empty();
            data.forEach(item => {
                $('#itemList').append(`<li>${item.name} 
                    <button onclick="editItem('${item._id}', '${item.name}')">Edit</button>
                    <button onclick="deleteItem('${item._id}')">Delete</button>
                </li>`);
            });
        });
    }

    $('#addItem').click(function() {
        const itemName = $('#itemName').val();
        $.post('/items', { name: itemName }, function() {
            fetchItems();
            $('#itemName').val('');
        });
    });

    $('#updateItem').click(function() {
        const itemId = $('#itemId').val();
        const itemName = $('#itemName').val();

        $.ajax({
            url: '/items/' + itemId,
            type: 'PUT',
            data: { name: itemName },
            success: function() {
                fetchItems();
                $('#itemName').val('');
                $('#itemId').val('');
                $('#addItem').show();
                $('#updateItem').hide();
            }
        });
    });

    window.editItem = function(id, name) {
        $('#itemName').val(name);
        $('#itemId').val(id);
        $('#addItem').hide();
        $('#updateItem').show();
    }

    window.deleteItem = function(id) {
        $.ajax({
            url: '/items/' + id,
            type: 'DELETE',
            success: function() {
                fetchItems();
            }
        });
    }

    fetchItems();
});
