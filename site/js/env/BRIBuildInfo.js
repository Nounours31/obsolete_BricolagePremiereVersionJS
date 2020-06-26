'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-26 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1532';
    this._commitGIT = 'a1f322a0a19db4d314217f23eee438d7d48ded44';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}