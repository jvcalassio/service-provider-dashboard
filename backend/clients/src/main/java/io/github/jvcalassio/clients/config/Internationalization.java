package io.github.jvcalassio.clients.config;

import java.util.Locale;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@Configuration
public class Internationalization {

    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource msgSource = new ReloadableResourceBundleMessageSource();
        msgSource.setBasename("classpath:messages");
        msgSource.setDefaultEncoding("UTF-8");
        msgSource.setDefaultLocale(Locale.getDefault());
        return msgSource;
    }

    public LocalValidatorFactoryBean validatorFactoryBean() {
        LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
        bean.setValidationMessageSource(this.messageSource());
        return bean;
    }
}