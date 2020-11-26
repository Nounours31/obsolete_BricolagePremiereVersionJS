'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-26 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2145';
    this._commitGIT = '85fb667e264c54795db428bcab530e50a254190c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}