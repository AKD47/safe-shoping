<?
$root_item = $this->items[0];
$this->items = $this->items[0]->getChildren();
$model_name = "SimpleCatalogCategory";
?>


<?

function print_tree_item($item, $uri) { ?>
    <li
        data-id="<?= $item->id ?>"
        class="uk-nestable-list-item js_cms-item<?= $item->enabled ? "" : " builder-list_item-disabled" ?>"
        namiObject="<?= $item->id ?>">

        <div class="uk-nestable-item">
            <div class="js_cms-item<?= $item->enabled ? "" : " builder-list_item-disabled" ?>" namiObject="<?= $item->id ?>">
                <div class='builder-items_list__item'>

                    <div class="builder-items_list__item_col_middle">
                        <div class="builder-list_item__item_content">

                            <div class="uk-grid">
                                <div class="uk-width-1-1">
                                    <a href='<?= $uri ?>/<?= $item->id ?>' class="js_cms-item_title" namiText="title">
                                        <?= $item->title ?>
                                    </a>

                                    <span class="uk-text-muted uk-margin-left" namiText="name">
                                        <?= $item->name ?>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="builder-items_list__item_col_right">
                        <div class="uk-text-right">
                            <div class="uk-button-group">
                                <button style="display: none" class="uk-button"></button>
                                <button class="uk-button js_cms-edit_item"><i class="uk-icon-pencil"></i></button>
                                <button class="uk-button js_cms-enabled_item" namiField="enabled"><i class="uk-icon-eye<?= $item->enabled ? "" : "-slash" ?>"></i></button>
                                <button class="uk-button js_cms-delete_item"><i class="uk-icon-trash"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <?
        $sub_items = $item->getChildren();
        ?>
        <? if ($sub_items): ?>
            <ul class='uk-nestable-list'>

                <? foreach ($sub_items as $sub_item): ?>
                    <? print_tree_item($sub_item, $uri) ?>
                <? endforeach ?>

            </ul>
        <? endif ?>

    </li>
    <?
}
?>


<div class="uk-grid">
    <div class="uk-width-1-1">
        &nbsp;<!--заголовок-->
    </div>
</div>


<div class="uk-grid uk-margin-small-bottom">
    <div class="uk-width-1-1">

        <button class="uk-button uk-button-success uk-button-medium js_cms-create_item">
            <i class="uk-icon-plus"></i>
            <span class="uk-text-bold">
                добавить запись
            </span>
        </button>

    </div>
</div>


<div class="js_cms-create_form_place"></div>
<hr class="uk-margin-top-remove uk-margin-small-top">


<ul class="uk-nestable js_cms-items" namiModel="<?= $model_name ?>" data-root_id="<?= $root_item->id ?>">
    <? foreach ($this->items as $item): ?>

        <?= print_tree_item($item, $this->uri) ?>

    <? endforeach; ?>
</ul>



<li id="js_cms-item_preview_template" class="js_cms-item uk-nestable-list-item" style="display:none;">

    <div class="uk-nestable-item">
        <div class='builder-items_list__item'>
            <div class="builder-items_list__item_col_middle">
                <div class="builder-list_item__item_content">

                    <div class="uk-grid">
                        <div class="uk-width-1-1">
                            <a class="js_cms-item_title" href="" namiText="title"></a>

                            <span class="uk-text-muted uk-margin-left" namiText="name">
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div class="builder-items_list__item_col_right">
                <div class="uk-text-right">
                    <div class="uk-button-group">
                        <button style="display: none" class="uk-button"></button>
                        <button class="uk-button js_cms-edit_item"><i class="uk-icon-pencil"></i></button>
                        <button class="uk-button js_cms-enabled_item" namiField="enabled"><i class="uk-icon-eye"></i></button>
                        <button class="uk-button js_cms-delete_item"><i class="uk-icon-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</li>


<div class='uk-width-1-1' id="js_cms-item_edit_form" style="display:none;">
    <div class="builder-add_item_form">
        <form class="uk-form uk-form-horizontal">
            <?= NamiFormGenerator::forModel($model_name); ?>

            <div class="uk-form-row">
                <div class="uk-text-right uk-margin-large-top">
                    <button type="button" class="uk-button uk-button-success js_cms_item_edit_form__save">
                        <i class="uk-icon-save"></i>
                        Сохранить
                    </button>

                    <button type="button" class="uk-button uk-button-danger js_cms_item_edit_form__cancel">
                        Отмена
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>



<script>
    $(function() {
        var itemForm = Object.create(Nami.Form);

        Builder
            .Interface
            .modelForm(itemForm)
            .listActions(itemForm)
            .nestedSortable(itemForm);

        itemForm.bind('fillitem', function(item, data) {
            item.find('a').attr('href', "<?= $this->uri ?>/" + data.id);
        });

    });
</script>