<template>
  <main class="form-block">
    <h1 class="header">Форма подачи заявки в отдел сервиса и качества</h1>

    <div class="form-block__container">
      <section class="checkbox-block">
        <h2 class="title">Ваш филиал</h2>
        <GuiLoader v-if="showLoader" />
        <GuiSelect
          v-else
          :disabled="checkboxIsOnline.value"
          :title="selectCities.label"
          :options="arrayCities"
          :placeholder="selectCities.placeholder"
          v-model="selectCities.value"
        />

        <GuiCheckbox
          v-model="checkboxIsOnline.value"
          :text="checkboxIsOnline.label"
          @input="selectCities.value = ''"
        />
      </section>

      <section class="radio-buttons-block">
        <h2 class="title">Тема обращения</h2>

        <GuiRadioButtons
          :options="radioButtonsReasons.options"
          :name="radioButtonsReasons.name"
          v-model="radioButtonsReasons.choosedButton"
          @input="anotherReasonValue = ''"
        />

        <GuiInputText
          v-model="anotherReasonValue"
          @input="radioButtonsReasons.choosedButton = ''"
        />
      </section>

      <section class="text-area-block">
        <h2 class="title">Описание проблемы</h2>
        <GuiTextArea v-model="descriptionValue" />
      </section>

      <section class="loading-form-block">
        <h2 class="title title--optional">Загрузка документов</h2>
        <p class="loading-form-block__text">
          Приложите, пожалуйста, полноэкранный скриншот. Это поможет решить
          проблему.
        </p>
        <input type="file" ref="fileInput" />
      </section>

      <GuiButton
        label="отправить"
        @click.native="toSubmitData"
        :disabled="!validationCheck"
      />
    </div>
  </main>
</template>

<script>
import GuiSelect from "@/components/gui/GuiSelect.vue";
import GuiCheckbox from "@/components/gui/GuiCheckbox.vue";
import GuiRadioButtons from "@/components/gui/GuiRadioButtons.vue";
import GuiInputText from "@/components/gui/GuiInputText.vue";
import GuiTextArea from "@/components/gui/GuiTextArea.vue";
import GuiButton from "@/components/gui/GuiButton.vue";
import GuiLoader from "@/components/gui/GuiLoader.vue";

export default {
  name: "FormPage",
  data() {
    return {
      selectCities: {
        disabled: false,
        value: "",
        placeholder: "Выберите город",
      },
      checkboxIsOnline: {
        label: "Онлайн",
        value: false,
      },
      radioButtonsReasons: {
        name: "radioButtonsGroup",
        choosedButton: "",
        options: [
          {
            text: "Недоволен качеством услуг",
            value: "Недоволен качеством услуг",
          },
          {
            text: "Расторжение договора",
            value: "Расторжение договора",
          },
          {
            text: "Не приходит письмо активации на почту",
            value: "Не приходит письмо активации на почту",
          },
          {
            text: "Не работает личный кабинет",
            value: "Не работает личный кабинет",
          },
        ],
      },
      anotherReasonValue: "",
      descriptionValue: "",
      isSubmitDisabled: true,
      showLoader: false,
    };
  },
  components: {
    GuiSelect,
    GuiCheckbox,
    GuiRadioButtons,
    GuiInputText,
    GuiTextArea,
    GuiButton,
    GuiLoader,
  },

  computed: {
    arrayCities() {
      return this.$store.getters["cities/citiesNames"];
    },

    validationCheck() {
      return (
        (this.selectCities.value || this.checkboxIsOnline.value) &&
        (this.radioButtonsReasons.choosedButton || this.anotherReasonValue) &&
        this.descriptionValue
      );
    },
  },

  methods: {
    openPage() {
      this.$router.push("/success");
    },

    toSubmitData() {
      // Не знаю как правильно отправить одним запросом и JSON и FormData (загрузка документов)
      // Чтобы отправить его на сервер, нужно добавить его в тело запроса
      // body: formData

      fetch("https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/send-form", {
        method: "POST",
        body: JSON.stringify({
          selectValue: this.selectCities.value,
          checkboxValue: this.checkboxIsOnline.value,
          radioButtonValue: this.radioButtonsReasons.choosedButton,
          inputTextValue: this.anotherReasonValue,
          textAreaValue: this.descriptionValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            this.openPage();
          } else {
            alert("Ошибка отправки заявки");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.showLoader = true;
    this.$store.dispatch("cities/getListOfCities").finally(() => {
      this.showLoader = false;
    });
  },
};
</script>

<style scoped lang="scss">
.form-block {
  max-width: 992px;
  margin: 0 auto;
  padding: 24px;

  &__container {
    padding: 24px;
    border: 1px solid rgb(229, 229, 229);
  }
}

.radio-buttons-block {
  margin: 36px 0;
}

.loading-form-block {
  margin: 36px 0;
  &__text {
    max-width: 320px;
    font-size: 14px;
    line-height: 20px;
    color: rgb(161, 161, 161);
    margin-bottom: 12px;
  }
}
</style>
