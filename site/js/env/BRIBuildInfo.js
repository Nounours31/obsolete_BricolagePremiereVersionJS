'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1075';
    this._commitGIT = '16897d534c4a5cfa652373f423be51bafe8744be';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}