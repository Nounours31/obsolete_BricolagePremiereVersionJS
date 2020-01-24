'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-24 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-916';
    this._commitGIT = '90b6857b677e919cd07281a90c05f428af2fca40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}