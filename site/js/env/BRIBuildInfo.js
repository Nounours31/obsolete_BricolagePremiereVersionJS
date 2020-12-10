'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-10 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-2201';
    this._commitGIT = 'e87cd4e193bce7029f7cdf76187020e938a8fbf8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}