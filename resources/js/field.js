import IndexField from './components/Text/IndexField.vue'
import DetailField from './components/Text/DetailField.vue'
import FormField from './components/Text/FormField.vue'

import DetailTextareaField from './components/Textarea/DetailField.vue'
import FormTextareaField from './components/Textarea/FormField.vue'

Nova.booting((app, store) => {
  app.component('index-japanese-transformer-text', IndexField)
  app.component('detail-japanese-transformer-text', DetailField)
  app.component('form-japanese-transformer-text', FormField)

  app.component('detail-japanese-transformer-textarea', DetailTextareaField)
  app.component('form-japanese-transformer-textarea', FormTextareaField)
})
