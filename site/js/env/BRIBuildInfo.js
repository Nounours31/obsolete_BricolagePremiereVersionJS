'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-01 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1434';
    this._commitGIT = '3ea6c7d53e035de3f454373cc13b97075966912d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}