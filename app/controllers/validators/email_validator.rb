class EmailValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        if value.present?
          unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
            record.errors[attribute] << (options[:message] || "Not a valid email")
          end
      end
    end
  end