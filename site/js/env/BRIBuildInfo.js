'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-02 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2167';
    this._commitGIT = '88fadc0b5938ca225b007b672a05d11c2af56ed1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}