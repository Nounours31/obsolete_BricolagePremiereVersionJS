'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-17 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1863';
    this._commitGIT = 'bd5a948a79dcb5b02c78239c8f3ce2e2eca53bba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}