'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-21 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1144';
    this._commitGIT = '2350b53b18c76cb665d196fb4bcc62f305b0fb4b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}