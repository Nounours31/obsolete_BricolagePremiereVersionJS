'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-22 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1391';
    this._commitGIT = 'be2be547b1778a5489c9f71f15e70e9a625caf9e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}