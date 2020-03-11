'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-11 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1106';
    this._commitGIT = '366a76d5529096d7e8cd6e05fd6a36a96603049f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}