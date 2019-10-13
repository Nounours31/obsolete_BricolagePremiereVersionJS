'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-13 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-506';
    this._commitGIT = '51cee563c2237f184b9dfa86babdfc62834f0a06';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}