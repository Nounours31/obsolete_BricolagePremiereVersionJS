'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-09 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-731';
    this._commitGIT = 'ab9b49cca07e9612d57929abcdaeed9ce7980d4a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}