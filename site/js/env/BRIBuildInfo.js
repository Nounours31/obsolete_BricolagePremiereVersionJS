'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-07 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2188';
    this._commitGIT = '530038f93255add9051bf7d052374fa66c749afc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}