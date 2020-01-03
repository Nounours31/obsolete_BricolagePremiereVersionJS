'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-03 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-831';
    this._commitGIT = '1ea6f8e38554c1dff70be7faa42ca9500a63f38b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}