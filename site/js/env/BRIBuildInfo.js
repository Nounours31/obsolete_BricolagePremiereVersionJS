'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-25 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1162';
    this._commitGIT = 'ab89b4bf2fb5a84f3f1f34dad9f8beb0d1880fb6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}