'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-19 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1135';
    this._commitGIT = '48b5fa06b3e89a327e7565eea107ebb64cf157cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}