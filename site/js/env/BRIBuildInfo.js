'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-10 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-862';
    this._commitGIT = '13cba53de58ff7e20a05473539aee485780e7805';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}