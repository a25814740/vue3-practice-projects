import { reactive } from 'vue'

export function useTaskForm() {
  const form = reactive({
    title: '',
    projectId: 1,
  })

  const resetForm = () => {
    form.title = ''
    form.projectId = 1
  }

  return {
    form,
    resetForm,
  }
}
